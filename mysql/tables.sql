CREATE TABLE Users(
    id INT AUTO_INCREMENT,
    number VARCHAR(40) UNIQUE NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    active BOOLEAN NOT NULL DEFAULT true,
    description VARCHAR(255) DEFAULT 'Hey! Estoy usando Whatsapp',
    PRIMARY KEY(id)
    )

CREATE TABLE Contacts (
    user_id INT NOT NULL,
    contact_id INT NOT NULL,
    PRIMARY KEY(user_id, contact_id), 
    FOREIGN KEY(user_id) REFERENCES Users(id),
    FOREIGN KEY(contact_id) REFERENCES Users(id)
);

CREATE TABLE Messages(
    id INT PRIMARY KEY AUTO_INCREMENT,
    content TEXT NOT NULL,
    author_id INT NOT NULL,
    receiver_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CHECK (author_id != receiver_id),
    FOREIGN KEY(author_id) REFERENCES Users(id)
    FOREIGN KEY(receiver_id) REFERENCES Users(id)
)