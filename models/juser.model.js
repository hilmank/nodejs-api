class JUser {
    constructor(id, fullname, email, phone, gender, education, categoryInstitution, institution, active, createdAt, updatedAt, uniqueCode) {
        this.id = id;
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
        this.education = education;
        this.categoryInstitution = categoryInstitution;
        this.institution = institution;
        this.active = active;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.uniqueCode = uniqueCode;
    }
}
/*
{
  "id": 0,
  "fullName": null,
  "email": null,
  "phone": null,
  "gender": null,
  "education": null,
  "categoryInstitution": null,
  "institution": null,
  "active": false,
  "createdAt": "0001-01-01T00:00:00",
  "updatedAt": "0001-01-01T00:00:00",
  "uniqueCode": null
}
*/