package sample.main;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/values")
public class ValuesApi {
	
	@GET
	@Path("/")
	@Produces(MediaType.APPLICATION_JSON)
	public List<String> value() {
		List<String> result = new ArrayList<>();
		for(int i = 0; i < 10; i++) {
			result.add("Olá mundo! Index: " + i + " :: " + Instant.now());
		}
		return result;
	}

}
