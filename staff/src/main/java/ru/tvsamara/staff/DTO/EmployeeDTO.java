package ru.tvsamara.staff.DTO;

import ru.tvsamara.staff.API.Employee;

/**
 *
 * @author venia
 */
public class EmployeeDTO implements Employee{
    private String fio;
    private String dept;
    private String job;
    private String snils;
    private String address;
    private String workShedule;

    @Override
    public String getWorkShedule() {
        return workShedule;
    }

    @Override
    public void setWorkShedule(String workShedule) {
        this.workShedule = workShedule;
    }

    @Override
    public String getFio() {
        return fio;
    }

    @Override
    public void setFio(String fio) {
        this.fio = fio;
    }

    @Override
    public String getDept() {
        return dept;
    }

    @Override
    public void setDept(String dept) {
        this.dept = dept;
    }

    @Override
    public String getJob() {
        return job;
    }

    @Override
    public void setJob(String job) {
        this.job = job;
    }

    @Override
    public String getSnils() {
        return snils;
    }

    /**
     *
     * @param snils
     */
    @Override
    public void setSnils(String snils) {
        this.snils = snils;
    }

    @Override
    public String getAddress() {
        return address;
    }

    @Override
    public void setAddress(String address) {
        this.address = address;
    }
    
}
