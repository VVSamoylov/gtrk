package ru.tvsamara.staff.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

/**
 * Сотрудник
 * @author venia
 */
@Entity
@Table(name="employee")
public class EmployeeImpl {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String snils;
    private String firstName;
    private String middleName; 
    private String lastName;
    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "DEPARTAMENT_ID", unique = false, nullable = true)
    private DepartamentImpl dept;
    
    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "POSITION_ID", unique = false, nullable = true)
    private Position position;
    @ManyToOne
    @JoinColumn(name = "WORKSCHEDULE_ID", unique = false, nullable = true)
    private Workschedule schedule;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /**
     *
     * @return
     */
    public DepartamentImpl getDept() {
        return dept;
    }

    public void setDept(DepartamentImpl dept) {
        this.dept = dept;
    }

    public String getSnils() {
        return snils;
    }

    /**
     *
     * @param snils
     */
    public void setSnils(String snils) {
        this.snils = snils;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public Workschedule getSchedule() {
        return schedule;
    }

    public void setSchedule(Workschedule sschedule) {
        this.schedule = sschedule;
    }


    
}
