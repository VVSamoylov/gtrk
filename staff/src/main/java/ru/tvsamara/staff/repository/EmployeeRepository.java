package ru.tvsamara.staff.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.tvsamara.staff.entity.EmployeeImpl;

/**
 *
 * @author venia
 */
@Repository
public interface EmployeeRepository extends CrudRepository<EmployeeImpl, Long> {
    @Query("select e from EmployeeImpl e where e.id=?1")
  EmployeeImpl getEmployeeById(Long id);   
    @Query("select e from EmployeeImpl e where e.lastName=?1 AND e.firstName=?2 AND e.middleName=?3")
  EmployeeImpl getEmployeeIdByFullName(String lastName, String firstName, String midleName);   
  
    
}
