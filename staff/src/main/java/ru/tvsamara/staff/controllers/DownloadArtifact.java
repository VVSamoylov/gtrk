package ru.tvsamara.staff.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author venia
 */
@Controller
@RequestMapping("/")
public class DownloadArtifact {
    
    @GetMapping("/addEmployee")
    public ModelAndView getTestData() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("index");
        //mv.getModel().put("data", "Welcome home man");

        return mv;
    }
}
