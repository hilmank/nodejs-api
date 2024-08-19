class JQuestionnaire {
    constructor(id, suggestion, active, visible, createdAt, updatedAt, customer, totalSkm, createdByUser, isApproved, customerId, createdByUserId) {
        this.id = id;
        this.suggestion = suggestion;
        this.active = active;
        this.visible = visible;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.customer = customer;
        this.totalSkm = totalSkm;
        this.createdByUser = createdByUser;
        this.isApproved = isApproved;
        this.customerId = customerId;
        this.createdByUserId = createdByUserId;
    }
}
/*
{
  "id": 0,
  "suggestion": null,
  "active": false,
  "visible": false,
  "createdAt": "0001-01-01T00:00:00",
  "updatedAt": "0001-01-01T00:00:00",
  "totalSkm": 0.0,
  "isApproved": null,
  "customerId": null,
  "createdByUserId": null
}
*/
