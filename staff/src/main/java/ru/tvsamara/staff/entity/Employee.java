package ru.tvsamara.staff.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

/**
 * Сотрудник
 * @author venia
 */
@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String snils;
    private String firstName;
    private String middleName;
    private String lastName;
    @OneToOne
    @JoinColumn(name = "POSITION_ID", unique = true, nullable = false)
    private Position position;
    @OneToOne
    @JoinColumn(name = "WORKSCHEDULE_ID", unique = true, nullable = true)
    private WorkSchedule sschedule;

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

    public String getSnils() {
        return snils;
    }

    public void setSnils(String snils) {
        this.snils = snils;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public WorkSchedule getSschedule() {
        return sschedule;
    }

    public void setSschedule(WorkSchedule sschedule) {
        this.sschedule = sschedule;
    }
    
}
