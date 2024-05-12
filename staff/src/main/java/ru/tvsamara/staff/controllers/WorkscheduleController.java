package ru.tvsamara.staff.controllers;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.tvsamara.staff.entity.Workschedule;
import ru.tvsamara.staff.repository.WorkscheduleRepository;

/**
 *
 * @author venia
 */
@RestController
@RequestMapping("/workschedule")
public class WorkscheduleController {
    @Autowired
    private WorkscheduleRepository workschedRepo;
    
    @GetMapping("/gatall")
    public Iterable<Workschedule> getAll(){
        return workschedRepo.findAll();
    }
    @PostMapping("/addworkschedule")
    public Boolean addWorkschedule(@RequestParam("id") Long id, @RequestParam("workschedName") String workschedName){
        Workschedule workshedule;
        Optional<Workschedule> w = workschedRepo.findById(id);
        if(w.isEmpty()){
            workshedule = new Workschedule();
        }else{
            workshedule = w.get();
        }
        workshedule.setScheduleName(workschedName);
        workschedRepo.save(workshedule);
        return true;
        
    }
    
}
