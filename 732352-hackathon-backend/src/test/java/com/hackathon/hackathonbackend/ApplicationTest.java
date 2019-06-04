package com.hackathon.hackathonbackend;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;
import org.junit.Assert;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class ApplicationTest {
	@Test
	public void sampleTest() {
		Assert.assertTrue("ab" == "ab");
	}
}
