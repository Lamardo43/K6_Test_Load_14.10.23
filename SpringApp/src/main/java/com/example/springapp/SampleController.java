package com.example.springapp;

import org.springframework.web.bind.annotation.*;

import java.time.Instant;

@RestController
public class SampleController {

    @PostMapping("/post-message")
    public ResponseData processRequest(@RequestBody RequestData requestData) {
        // Создание ответа с данными из входящего запроса
        ResponseData responseData = new ResponseData();

        responseData.setMsg_id(requestData.getMsg_id());
        responseData.setTimestamp(
                String.valueOf(Instant.now().getEpochSecond())
        );
        responseData.setMethod("POST");
        responseData.setUrl("/post-message");

        return responseData;
    }
}
