class PVQuestionnaire {
    constructor(id, value, visible, active, createdAt, updatedAt, idQuestionnaire, idQuestion, optionalSelected, idElement, question, reason) {
        this.id = id;
        this.value = value;
        this.visible = visible;
        this.active = active;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.idQuestionnaire = idQuestionnaire;
        this.idQuestion = idQuestion;
        this.optionalSelected = optionalSelected;
        this.idElement = idElement;
        this.question = question;
        this.reason = reason;
    }
}
/*
{
  "id": 0,
  "value": 0,
  "visible": false,
  "active": false,
  "createdAt": "0001-01-01T00:00:00",
  "updatedAt": "0001-01-01T00:00:00",
  "idQuestionnaire": 0,
  "idQuestion": 0,
  "optionalSelected": null,
  "idElement": 0
}

*/