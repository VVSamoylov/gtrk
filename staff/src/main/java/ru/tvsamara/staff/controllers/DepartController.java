package ru.tvsamara.staff.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.tvsamara.staff.entity.DepartamentImpl;
import ru.tvsamara.staff.entity.EmployeeImpl;
import ru.tvsamara.staff.repository.DepartRepository;
import ru.tvsamara.staff.repository.EmployeeRepository;

/**
 *
 * @author venia
 */
@RestController
@RequestMapping("/depart")
public class DepartController {
    @Autowired
    DepartRepository departRepo;
    @Autowired
    EmployeeRepository employeeRepo;
    
    
    @GetMapping("/getall")
    public Iterable<DepartamentImpl> getAll(){
        Iterable<DepartamentImpl> departs = departRepo.findAll();
        
        return departs;
    }
    @GetMapping("/getbyname")
    public DepartamentImpl getByName(@RequestParam("deptname") String deptName){
        DepartamentImpl depart = departRepo.getByDepName(deptName);
        return depart;
    }
    @PostMapping("/adddept")
    public Boolean addDept(@RequestParam("id") Long id, @RequestParam("deptname") String deptName, @RequestParam("bossid") Long bossId){
        DepartamentImpl depart = departRepo.getByDepId(id);
        if(depart == null){
            depart = new DepartamentImpl();
        }
        EmployeeImpl employee = employeeRepo.geEmployeetById(bossId);
        depart.setBoss(employee);
        depart.setDepName(deptName);
        departRepo.save(depart);
        return true;
    }
}
