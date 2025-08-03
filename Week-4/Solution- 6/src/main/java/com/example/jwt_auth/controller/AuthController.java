package com.example.jwt_auth.controller;



import com.example.jwt_auth.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.*;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class AuthController {

    @Autowired
    private AuthenticationManager authManager;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> body) {
        String username = body.get("username");
        String password = body.get("password");

        Authentication auth = new UsernamePasswordAuthenticationToken(username, password);
        authManager.authenticate(auth); // throws exception if auth fails

        return jwtUtil.generateToken(username);
    }
}
