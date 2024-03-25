package com.fyp.gemzonProject.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;
//import org.springframework.security.core.userdetails.UserDetails;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.function.Function;
import java.util.HashMap;
import java.util.Map;

@Service
public class JwtTokenService {

    private final SecretKey secretKey;

    public JwtTokenService() {
        this.secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS256);
    }

    public String generateToken(int id,String username, String password, String firstName, String lastName) {
        Date now = new Date();
        Date expiration = new Date(now.getTime() + 864_000_000); // 10 days (in milliseconds)

        Map<String, Object> additionalInfo = new HashMap<>();
        additionalInfo.put("id", id);
        additionalInfo.put("password", password);
        additionalInfo.put("firstName", firstName);
        additionalInfo.put("lastName", lastName);

        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(now)
                .setExpiration(expiration)
                .addClaims(additionalInfo)
                .signWith(secretKey)
                .compact();
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(secretKey)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    public Boolean validateToken(String token, String usernam) {
        final String username = extractUsername(token);
        return (username.equals(usernam) && !isTokenExpired(token));
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }
    public int extractUserId(String token) {
        Claims claims = extractAllClaims(token);
        return claims.get("id", Integer.class);
    }

    public Date extractTime(String token) {
        return extractClaim(token, Claims::getIssuedAt);
    }
 // ... (existing code)

    public String extractFirstName(String token) {
    	 Claims claims = extractAllClaims(token);
         return claims.get("firstName", String.class);
//        return extractClaim(token, claims -> claims.get("firstName", String.class));
    }

    public String extractLastName(String token) {
    	 Claims claims = extractAllClaims(token);
         return claims.get("lastName", String.class);
//        return extractClaim(token, claims -> claims.get("lastName", String.class));
    }

}
