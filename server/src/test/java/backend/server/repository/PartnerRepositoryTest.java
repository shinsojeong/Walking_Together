package backend.server.repository;

import backend.server.entity.Activity;
import backend.server.entity.Member;
import backend.server.entity.Partner;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.stream.LongStream;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PartnerRepositoryTest {

    @Autowired
    PartnerRepository partnerRepository;

    @Test
    public void insertDummies() {

        LongStream.rangeClosed(1,100).forEach(i -> {
            Partner partner = Partner.builder()
                    .partnerBirth("19950301")
                    .partnerName("name" + i)
                    .member(Member.builder().stdId(String.valueOf(i)).build())
                    .build();
            partnerRepository.save(partner);
        });
    }

}