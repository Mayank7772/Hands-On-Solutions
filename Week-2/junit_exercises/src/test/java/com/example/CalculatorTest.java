package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        System.out.println("Setting up...");
        calculator = new Calculator();
    }

    @After
    public void tearDown() {
        System.out.println("Cleaning up...");
        calculator = null;
    }

    @Test
    public void testAdd() {
        int a = 2;
        int b = 3;

        int result = calculator.add(a, b);

        assertEquals("2 + 3 should be 5", 5, result);
    }

    @Test
    public void testMultiply() {

        int a = 4;
        int b = 5;

        int result = calculator.multiply(a, b);

        assertEquals("4 * 5 should be 20", 20, result);
    }
}
