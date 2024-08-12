package com.rest_demo.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class AppSecurity {

    @Autowired
    private UserDetailsService userDetailsService;
    @Bean
    public SecurityFilterChain securityConfig(HttpSecurity http) throws Exception {
        
        return  http.csrf(customizer -> customizer.disable())
                    .authorizeHttpRequests(requests -> requests.anyRequest().authenticated())
                    .formLogin(Customizer.withDefaults())
                    .httpBasic(Customizer.withDefaults())
                    .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                    .build();
        
    }

    // WIll not work with Database
    // @Bean
    // public UserDetailsService userDetailsService(){
        
    //     UserDetails user1 = User
    //                         .withDefaultPasswordEncoder()
    //                         .username("Hiyakkai")
    //                         .password("Hiyakkai")
    //                         .roles("USER")
    //                         .build();
        
    //     UserDetails user2 = User
    //                         .withDefaultPasswordEncoder()
    //                         .username("Yae")
    //                         .password("Yae@123")
    //                         .roles("ADMIN")
    //                         .build();

    //     return new InMemoryUserDetailsManager(user1, user2);
    // }

    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(NoOpPasswordEncoder.getInstance());
        return provider;
    }

}
