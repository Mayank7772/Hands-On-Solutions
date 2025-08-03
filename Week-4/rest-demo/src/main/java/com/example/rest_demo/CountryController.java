package com.example.rest_demo;



import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.*;

@RestController
public class CountryController {

    private static Map<String, Country> countryMap = new HashMap<>();

    static {
        countryMap.put("IN", new Country("India", "New Delhi", 1400000000L));
        countryMap.put("US", new Country("United States", "Washington, D.C.", 331000000L));
        countryMap.put("JP", new Country("Japan", "Tokyo", 125000000L));
    }

    @GetMapping("/country/{code}")
    public Country getCountryByCode(@PathVariable String code) {
        return countryMap.getOrDefault(code.toUpperCase(), new Country("Not Found", "-", 0));
    }
}
