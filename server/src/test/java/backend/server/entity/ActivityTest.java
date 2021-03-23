package backend.server.entity;

import backend.server.repository.ActivityRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.stream.LongStream;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ActivityTest {

    @Autowired
    ActivityRepository activityRepository;

    @Test
    public void insertDummies() {
        LongStream.rangeClosed(1,100).forEach(i -> {
            Activity activity = Activity.builder()
                    .activityDate(LocalDate.now())
                    .distance(i)
                    .endTime(LocalDateTime.of(2021,03,01,12,03))
                    .startTime(LocalDateTime.of(2021,03,01,12,03))
                    .partner((Partner.builder().partnerId(i).build()))
                    .member(Member.builder().stdId(String.valueOf(i)).build())
                    .build();
            activityRepository.save(activity);
        });
    }

}