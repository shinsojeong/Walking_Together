package backend.server.DTO.notice;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FileData {

    private List<MultipartFile> imageFiles;

    private List<MultipartFile> attachedFiles;

    private String title;

    private String content;
}
