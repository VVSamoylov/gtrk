package ru.tvsamara.staff.API;

/**
 *
 * @author venia
 */
public interface Employee {
    String getFio();
    void setFio(String fio);
    String getDept();
    void setDept(String dept);
    String getJob();
    void setJob(String job);
    String getSnils();
    void setSnils(String snils);
    String getAddress();
    void setAddress(String address);
    String getWorkShedule();
    void setWorkShedule(String workShedule);
    
}
