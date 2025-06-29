package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class MyServiceTest {

    // Exercise 1 
    @Test
    public void testExternalApi() {
        // Mock the ExternalApi
        ExternalApi mockApi = mock(ExternalApi.class);

        // Stub the method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Inject mock into service
        MyService service = new MyService(mockApi);

        // Call method and assert
        String result = service.fetchData();
        assertEquals("Mock Data", result);
    }

/// Exercise  2 
/// 
    @Test
    public void testVerifyInteraction() {
        ExternalApi mockApi = mock(ExternalApi.class);

        MyService service = new MyService(mockApi);
        service.fetchData();

        // Verify getData() was called once
        verify(mockApi).getData();
    }

}
