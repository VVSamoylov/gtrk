package ru.tvsamara.staff.service.fileService;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.logging.Level;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import ru.tvsamara.staff.Configuration.FileStorageProperties;
import ru.tvsamara.staff.API.Employee;
import ru.tvsamara.staff.DTO.EmployeeDTO;
import ru.tvsamara.staff.entity.EmployeeImpl;

/**
 *
 * @author venia
 */
@Service
public class DownlodFileToDB {
    private Logger LOG = LoggerFactory.getLogger(DownlodFileToDB.class);
    private final Path fileStorageLocation;
    @Autowired
    public DownlodFileToDB(FileStorageProperties fileStorageProperties) {
    this.fileStorageLocation = (Path) Paths.get(fileStorageProperties.getUploadDir())
                .toAbsolutePath().normalize();

        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (Exception ex) {
            LOG.error("Не найдена папка для загрузки файла.", ex);
        }
        
    }
    
    
    public List<Employee>  DownlodFileEmployeeToDB(MultipartFile file) {
        
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Path targetLocation = this.fileStorageLocation.resolve(fileName);
        File xlsFile = targetLocation.toFile();
        List<Employee> lemployee = new LinkedList();
        try ( // Creating input stream
                FileInputStream inputStream = new FileInputStream(xlsFile)) {
            Workbook workbook = WorkbookFactory.create(inputStream);
            
            Sheet sheet = workbook.getSheetAt(0);
            
            Iterator<Row> iterator = sheet.iterator();
            boolean startRows = false;
            
            while (iterator.hasNext()) {
                Row nextRow = iterator.next();
                Iterator<Cell> cellIterator = nextRow.cellIterator();
                Employee empl = new EmployeeDTO();
                while (cellIterator.hasNext()) {
                    
                    Cell cell = cellIterator.next();
                    
                    switch (cell.getCellType()) {
                        case STRING:
                            if("Адрес места проживания".equalsIgnoreCase(cell.getStringCellValue()) && !startRows){
                                startRows = true;
                                continue;
                            }
                            if(!startRows){
                                break;
                            }
                            if(cell.getColumnIndex() == 0)
                                empl.setFio(cell.getStringCellValue().toString());
                            if(cell.getColumnIndex() == 3)
                                empl.setDept(cell.getStringCellValue().toString());
                            if(cell.getColumnIndex() == 10)
                                empl.setJob(cell.getStringCellValue().toString());
                            if(cell.getColumnIndex() == 11)
                                empl.setSnils(cell.getStringCellValue().toString());
                            if(cell.getColumnIndex() == 12)
                                empl.setWorkShedule(cell.getStringCellValue().toString());
                            break;                      
                        default:
                            break;
                    }
                }
                if(empl.getFio() != null)
                lemployee.add(empl);
            }
            workbook.close();
            
        } catch (IOException ex) {
            LOG.debug("Ошибка ввода вывода при чтении файла ", file.getOriginalFilename() );
        }
        return lemployee;
    }
}
