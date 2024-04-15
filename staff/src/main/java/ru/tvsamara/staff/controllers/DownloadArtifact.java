package ru.tvsamara.staff.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author venia
 */
@Controller
public class DownloadArtifact {
    
    @GetMapping("/")
    public ModelAndView getTestData() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("index.html");
        //mv.getModel().put("data", "Welcome home man");

        return mv;
    }
}
