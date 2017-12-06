const chai = require("chai");
const expect = chai.expect;
const Axios = require("axios");
const Request = require("../source/request");
const HttpSender = require("../source/http_sender");

describe ("An Axios implementation of a HTTP sender", function () {
	it("adds a data payload to the HTTP request.", function () {
		let expectedPayload = "test payload";
		let request = new Request(expectedPayload);
		let sender = new HttpSender();
		let requestConfig = sender.buildRequestConfig(request);

		expect(requestConfig.hasOwnProperty("data")).to.equal(true);
		expect(requestConfig.data).to.equal(expectedPayload);
	});

	// it ("")
});