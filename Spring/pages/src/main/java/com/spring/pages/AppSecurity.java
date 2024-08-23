package com.spring.pages;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.spring.pages.service.UserService;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@Configuration
@EnableWebSecurity
public class AppSecurity {
    
    @Autowired
    private UserService userService;

    @Bean UserDetailsService userDetailsService(){
        return userService;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // return http.csrf(customizer -> customizer.disable())
        //     .authorizeHttpRequests(request -> request.anyRequest().permitAll())
        //     .formLogin(form -> form.loginPage("/login")
        //                             .loginProcessingUrl("/login")
        //                             .usernameParameter("email")
        //                             .permitAll())
        //     .httpBasic(Customizer.withDefaults())
        //     .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        //     .build();
        return http.csrf(customizer -> customizer.disable())
                    .formLogin(form -> form
                                        .loginPage("/login").permitAll()
                                        .usernameParameter("email")
                                        .successHandler(authenticationSuccessHandler())
                                        .failureHandler(authenticationFailureHandler()))
                    .authorizeHttpRequests(authorize -> authorize
                                                            .requestMatchers("/register", "/login").permitAll()
                                                            .anyRequest().authenticated())
                    .logout(session -> session.permitAll())
                    .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.ALWAYS))
                    .build();
    }

    @Bean
    public AuthenticationSuccessHandler authenticationSuccessHandler(){
        return new AuthenticationSuccessHandler() {
            @Override
            public void onAuthenticationSuccess(HttpServletRequest req, HttpServletResponse res, Authentication authentication) throws IOException, ServletException {
                String email = authentication.getName();
                int user_id = userService.getIdByEmail(email);
                HttpSession session = req.getSession(true);
                session.setAttribute("email", email);
                session.setAttribute("userId", user_id);
                System.out.println(email + "  " + user_id);
                Map<String, Object> responseData = new HashMap<String, Object>();
                responseData.put("message", "Login successful");
                responseData.put("user_id", user_id);
                res.getWriter().write(new ObjectMapper().writeValueAsString(responseData));
                res.setStatus(HttpServletResponse.SC_OK);
                res.getWriter().flush();
            }
        };
        
    }

    @Bean
    public AuthenticationFailureHandler authenticationFailureHandler(){
        return (request, respone, exception) -> {
            respone.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            respone.getWriter().write("Login failed: " + exception.getMessage());
        };

    }
    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(new BCryptPasswordEncoder(12));
        provider.setUserDetailsService(userService);
        return provider;
    }


    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:5173")
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }

}
