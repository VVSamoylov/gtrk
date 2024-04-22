package ru.tvsamara.staff.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.tvsamara.staff.entity.Workschedule;

/**
 *
 * @author venia
 */
@Repository
public interface WorkscheduleRepository extends CrudRepository<Workschedule, Long>{
       @Query("select w from Workschedule w where w.scheduleName=?1")
   Workschedule getByScheduleName(String name);
}
