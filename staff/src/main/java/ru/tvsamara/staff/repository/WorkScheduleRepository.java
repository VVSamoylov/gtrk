package ru.tvsamara.staff.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.tvsamara.staff.entity.WorkSchedule;

/**
 *
 * @author venia
 */
@Repository
public interface WorkScheduleRepository extends CrudRepository<WorkSchedule, Long>{
     @Override
     public Iterable<WorkSchedule> findAll();
     @Override
     public void deleteAll();
     @Override
     public void delete(WorkSchedule entity);
     @Override
     public WorkSchedule save(WorkSchedule entity);
}
