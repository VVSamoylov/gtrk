package ru.tvsamara.staff.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.tvsamara.staff.entity.Departament;

/**
 *
 * @author venia
 */
@Repository
public interface DepartRepository  extends CrudRepository<Departament, Long>{
    @Override
    Iterable<Departament> findAll();
    @Override
    void delete(Departament entity);
    @Override
    void deleteAll();
    @Override
    Departament save(Departament entity);
}
