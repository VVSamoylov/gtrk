package ru.tvsamara.staff.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.tvsamara.staff.entity.Position;

/**
 *
 * @author venia
 */
@Repository
public interface PositionRepository extends CrudRepository<Position, Long>{
     @Override
     public Iterable<Position> findAll();
     @Override
     public void deleteAll();
     @Override
     public void delete(Position entity);
     @Override
     public Position save(Position entity);
     
}
