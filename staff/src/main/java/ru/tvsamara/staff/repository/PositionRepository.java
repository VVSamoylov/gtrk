package ru.tvsamara.staff.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.tvsamara.staff.entity.Position;

/**
 *
 * @author venia
 */
@Repository
public interface PositionRepository extends CrudRepository<Position, Long>{
    @Query("select p from Position p where p.posName=?1")
  Position getByPosName(String name);
     
}
