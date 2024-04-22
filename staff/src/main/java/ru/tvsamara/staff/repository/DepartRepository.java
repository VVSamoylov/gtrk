package ru.tvsamara.staff.repository;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.tvsamara.staff.entity.DepartamentImpl;

/**
 *
 * @author venia
 */
@Repository
public interface DepartRepository  extends CrudRepository<DepartamentImpl, Long>{
     @Query("select d from DepartamentImpl d where d.depName=?1")
  DepartamentImpl getByDepName(String name);   
}
