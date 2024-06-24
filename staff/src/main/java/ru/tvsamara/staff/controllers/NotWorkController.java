package ru.tvsamara.staff.controllers;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.tvsamara.staff.entity.NotWorking;
import ru.tvsamara.staff.repository.NotWorkingRepository;

/**
 *
 * @author venia
 */
@RestController
@RequestMapping("notworking")
public class NotWorkController {
    @Autowired
    NotWorkingRepository notworkrepo;
        
    @GetMapping("/getall")
    public Iterable<NotWorking> getAll(){
        return notworkrepo.findAll();
    }
    @PostMapping("/addnotworking")
    public Boolean addNotWorking(@RequestParam("id") Long id, @RequestParam("posname") String posName){
        Optional<NotWorking> notWorking = notworkrepo.findById(id);
        NotWorking notwork;
        if(notWorking.isEmpty()){
            notwork = new NotWorking();
        }else{
            notwork = notWorking.get();
        }
        //position.setPosName(posName);
        //positionRepo.save(position);
        return true;
    }
    
}
