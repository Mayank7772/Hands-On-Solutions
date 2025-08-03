package com.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class CountryApp {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("country-config.xml");
        Country country = (Country) context.getBean("country");
        country.display();
    }
}
