package ru.tvsamara.staff.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import ru.tvsamara.staff.API.Employee;
import ru.tvsamara.staff.entity.DepartamentImpl;
import ru.tvsamara.staff.entity.EmployeeImpl;
import ru.tvsamara.staff.entity.Position;
import ru.tvsamara.staff.entity.Workschedule;
import ru.tvsamara.staff.repository.DepartRepository;
import ru.tvsamara.staff.repository.EmployeeRepository;
import ru.tvsamara.staff.repository.PositionRepository;
import ru.tvsamara.staff.repository.WorkscheduleRepository;
import ru.tvsamara.staff.service.fileService.DownlodFileToDB;
import ru.tvsamara.staff.service.fileService.FileStorageService;

/**
 *
 * @author venia
 */
@Controller
public class DownloadFile {
    @Autowired
    private FileStorageService fileservice;
    @Autowired
    private DownlodFileToDB fileInExel;
    @Autowired
    DepartRepository departRepo;
    @Autowired
    PositionRepository positionRepo;
    @Autowired
    EmployeeRepository employeeRepo;
    @Autowired
    WorkscheduleRepository sheduleRepo;
    
    @PostMapping(value = "/upload/uploadempl", headers = ("content-type=multipart/*"),  consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity downloadEmployee(@RequestParam("file") MultipartFile file){
        fileservice.storeFile(file);
        System.out.println("rest start " + file.getOriginalFilename());
        List<Employee> employees = fileInExel.DownlodFileEmployeeToDB(file);
        fileservice.deleteFile(file);
        Set<String> depataments = new HashSet<>();
        Set<String> position = new HashSet<>();
        Set<String> sheduler = new HashSet<>();
        //создаем набор уникальных значений отделов и должностей
        for(Employee empl : employees){
            depataments.add(empl.getDept());
            position.add(empl.getJob());
            sheduler.add(empl.getWorkShedule());
        }
        //Сохраняем отделы в базу
        for(String dept : depataments){
            DepartamentImpl dpt = new DepartamentImpl();
            dpt.setDepName(dept);
            departRepo.save(dpt);
        }
        // Сохраняем должности в базу
        for(String pos : position){
            Position posItem = new Position();
            posItem.setPosName(pos);
            positionRepo.save(posItem);
        }
        // Сохраняем графики
        for(String shed : sheduler){
            Workschedule shedule = new Workschedule();
            shedule.setScheduleName(shed);
            sheduleRepo.save(shedule);
        }
        
        // Сохраняем сотрудников в базу
        for(Employee emp : employees){
            EmployeeImpl empItem = new EmployeeImpl();
            empItem.setFio(emp.getFio());
            empItem.setSnils(emp.getSnils());
            Workschedule wsh = sheduleRepo.getByScheduleName(emp.getWorkShedule());
            empItem.setSchedule(wsh);
            DepartamentImpl  dpt = departRepo.getByDepName(emp.getDept());
            empItem.setDept(dpt);
            Position pos = positionRepo.getByPosName(emp.getJob());
            empItem.setPosition(pos);
            employeeRepo.save(empItem);
            
        }
        
        
        return ResponseEntity.ok().build();
    }

    
}
