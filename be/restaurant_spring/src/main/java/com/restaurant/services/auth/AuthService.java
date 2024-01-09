package com.restaurant.services.auth;

import com.restaurant.dtos.SignupRequest;
import com.restaurant.dtos.UserDto;
import org.springframework.stereotype.Service;

@Service
public interface AuthService {
    UserDto createUser(SignupRequest signupRequest);
}
