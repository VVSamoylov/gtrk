package ru.tvsamara.staff.controllers;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.tvsamara.staff.entity.DepartamentImpl;
import ru.tvsamara.staff.entity.EmployeeImpl;
import ru.tvsamara.staff.entity.Position;
import ru.tvsamara.staff.entity.Workschedule;
import ru.tvsamara.staff.repository.DepartRepository;
import ru.tvsamara.staff.repository.EmployeeRepository;
import ru.tvsamara.staff.repository.PositionRepository;
import ru.tvsamara.staff.repository.WorkscheduleRepository;

/**
 *
 * @author venia
 */
@RestController
@RequestMapping("/employee")
public class EmployeeController {
    @Autowired
    private EmployeeRepository emplRepository;
    @Autowired
    private PositionRepository positionRepo;
    @Autowired
    private WorkscheduleRepository workscheduleRepo;
    @Autowired
    private DepartRepository departRepo;

    @GetMapping("/getallemployee")
    public Iterable<EmployeeImpl> getAllEmployee(){
        Iterable<EmployeeImpl> employees = emplRepository.findAll();        
        return employees;
    }
    
    @GetMapping("/getEmployee")
    public Optional<EmployeeImpl> getEmployeeById(@RequestParam("id") Long id){
        Optional<EmployeeImpl> employee = emplRepository.findById(id);
        return employee;
    }
    
    @PostMapping("/addemployee")
    public Boolean addEmployee(@RequestParam("id") Long id, @RequestParam("snils")String snils, @RequestParam("fio") String fio, 
            @RequestParam("depart") String depart, @RequestParam("jobname") String jobName, @RequestParam("workshcedule") String workShcedule){
        DepartamentImpl departament = departRepo.getByDepName(depart);
        EmployeeImpl employee = emplRepository.geEmployeetById(id);
        if(employee == null){
            employee= new EmployeeImpl();
        }
        Position position = positionRepo.getByPosName(jobName);
        Workschedule workshcedule = workscheduleRepo.getByScheduleName(workShcedule);
        employee.setDept(departament);
        employee.setFio(fio);
        employee.setPosition(position);
        employee.setSchedule(workshcedule);
        employee.setSnils(snils);
        emplRepository.save(employee);
        return true;
    }
    
}
