package ru.tvsamara.staff.controllers;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author venia
 */
@Controller
public class DownloadFile {
    
    @PostMapping(value = "/upload/uploadempl", headers = ("content-type=multipart/*"),  consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity downloadEmployee(@RequestParam("file") MultipartFile file){
        System.out.println("rest start " + file.getOriginalFilename());
        return ResponseEntity.ok().build();
    }

    
}
