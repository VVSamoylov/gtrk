package ru.tvsamara.staff.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.time.LocalDate;
import java.time.Period;



/**
 *
 * @author venia
 */
@Entity
@Table(name = "notworking")
public class NotWorking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String typeName;
    private Integer workDay;

    private LocalDate beginDate;
    private LocalDate endDate;
    
    @ManyToOne
    @JoinColumn(name = "EMPLOYEE_ID", unique = false, nullable = true)
    private EmployeeImpl employee;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }
    
    public Integer getWorkDay() {
        return workDay;
    }

    public void setWorkDay(Integer workDay) {
        this.workDay = workDay;
    }

    public LocalDate getBeginDate() {
        return beginDate;
    }

    public void setBeginDate(LocalDate beginDate) {
        this.beginDate = beginDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public EmployeeImpl getEmployee() {
        return employee;
    }

    public void setEmployee(EmployeeImpl employee) {
        this.employee = employee;
    }
     public int getIntervalDay(){
         
         return Period.between(beginDate, endDate).getDays();
         
     }
}
