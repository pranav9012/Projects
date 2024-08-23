package com.boot.security_demo;

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
public class AppSecurityConfig{

    @Autowired
    private UserDetailsService userDetailsService;
    @Bean
    public SecurityFilterChain  securityFilterChain(HttpSecurity http) throws Exception{
        
        // http.csrf(customizer -> customizer.disable());
        // // Every request should be authenticated
        // http.authorizeHttpRequests(request ->request.anyRequest().authenticated());
        // http.formLogin(Customizer.withDefaults());
        // // for postman access
        // http.httpBasic(Customizer.withDefaults());
        // // disable csrf and make it stateless
        // http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)); // now you cannot
        // // login from form cuz the moment you login it doesn't store session and you are bounced back to login page 
        // return http.build();

        // using builder pattern
        return http.csrf(customizer -> customizer.disable())
                    .authorizeHttpRequests(request ->request.anyRequest().authenticated())
                    .formLogin(Customizer.withDefaults())
                    .httpBasic(Customizer.withDefaults())
                    .sessionManagement(session ->
                                    session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                    .build();
    }
	
//     @Bean
//     public UserDetailsService userDetailsService() {

//         UserDetails user1 = User
//                             .withDefaultPasswordEncoder()
//                             .username("coding shot")
//                             .password("coding shot")
//                             .roles("USER")
//                             .build();
//         UserDetails user2 = User
//                             .withDefaultPasswordEncoder()
//                             .username("yae123")
//                             .password("yae123")
//                             .roles("ADMIN")
//                             .build();
                            
//         return new InMemoryUserDetailsManager(user1, user2);

	
// }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(NoOpPasswordEncoder.getInstance());
        provider.setUserDetailsService(userDetailsService);
        return provider;

}
}
