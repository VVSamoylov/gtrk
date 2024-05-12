package ru.tvsamara.staff.controllers;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.tvsamara.staff.entity.Position;
import ru.tvsamara.staff.repository.PositionRepository;

/**
 *
 * @author venia
 */
@RestController
@RequestMapping("/position")
public class PositionContraller {
    @Autowired
    PositionRepository positionRepo;
    
    @GetMapping("/getall")
    public Iterable<Position> getAll(){
        return positionRepo.findAll();
    }
    @PostMapping("/addposition")
    public Boolean addPosition(@RequestParam("id") Long id, @RequestParam("posname") String posName){
        Optional<Position> pos = positionRepo.findById(id);
        Position position;
        if(pos.isEmpty()){
            position = new Position();
        }else{
            position = pos.get();
        }
        position.setPosName(posName);
        positionRepo.save(position);
        return true;
    }
}
