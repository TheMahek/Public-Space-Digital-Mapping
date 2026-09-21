document.addEventListener("DOMContentLoaded", function () {

    /* ================================
       WHY PEOPLE VISIT
    ================================= */

    const visitPurpose = document.getElementById("visitPurposeChart");

    if (visitPurpose) {

        new Chart(visitPurpose, {
            type: "doughnut",

            data: {
                labels: [
                    "Walking / Exercise",
                    "Relaxation",
                    "Family Time",
                    "Children's Activities",
                    "Other"
                ],

                datasets: [{
                    data: [18, 14, 10, 5, 3],
                    borderWidth: 2
                }]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,

                plugins: {
                    legend: {
                        position: "bottom"
                    }
                },

                cutout: "55%"
            }
        });
    }


    /* ================================
       VISIT FREQUENCY
    ================================= */

    const visitFrequency =
        document.getElementById("visitFrequencyChart");

    if (visitFrequency) {

        new Chart(visitFrequency, {
            type: "bar",

            data: {
                labels: [
                    "Daily",
                    "Several times/week",
                    "Once a week",
                    "Occasionally"
                ],

                datasets: [{
                    label: "Visitors",

                    data: [8, 26, 8, 8],

                    borderRadius: 6
                }]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,

                scales: {
                    y: {
                        beginAtZero: true
                    }
                },

                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }


    /* ================================
       FACILITY SATISFACTION
    ================================= */

    const facilityChart =
        document.getElementById("facilityChart");

    if (facilityChart) {

        new Chart(facilityChart, {
            type: "bar",

            data: {
                labels: [
                    "Seating",
                    "Walking Paths",
                    "Play Area",
                    "Waste Bins",
                    "Lighting",
                    "Water"
                ],

                datasets: [{
                    label: "Satisfaction",

                    data: [78, 84, 70, 58, 66, 62],

                    borderRadius: 6
                }]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,

                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,

                        ticks: {
                            callback: function (value) {
                                return value + "%";
                            }
                        }
                    }
                }
            }
        });
    }


    /* ================================
       OVERALL SATISFACTION
    ================================= */

    const satisfactionChart =
        document.getElementById("satisfactionChart");

    if (satisfactionChart) {

        new Chart(satisfactionChart, {
            type: "doughnut",

            data: {
                labels: [
                    "Excellent",
                    "Good",
                    "Average",
                    "Poor"
                ],

                datasets: [{
                    data: [12, 24, 10, 4],
                    borderWidth: 2
                }]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,

                cutout: "58%",

                plugins: {
                    legend: {
                        position: "bottom"
                    }
                }
            }
        });
    }


    /* ================================
       COMMON ISSUES
    ================================= */

    const issuesChart =
        document.getElementById("issuesChart");

    if (issuesChart) {

        new Chart(issuesChart, {
            type: "bar",

            data: {
                labels: [
                    "Waste Bins",
                    "Seating",
                    "Lighting",
                    "Maintenance",
                    "Cleanliness"
                ],

                datasets: [{
                    label: "Respondents",

                    data: [21, 17, 13, 11, 9],

                    borderRadius: 6
                }]
            },

            options: {
                indexAxis: "y",

                responsive: true,
                maintainAspectRatio: false,

                scales: {
                    x: {
                        beginAtZero: true
                    }
                },

                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

});