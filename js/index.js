$(document).ready(function() {
    function TeamcityBuld(selector) {
        this.$el = $(selector);
        $.ajax({
            dataType: "jsonp",
            jsonp: 'jsonp',
            url: 'http://teamcity.qatools.ru/app/json/api/json'
        }).success(this.onLoadStatus.bind(this));
    }
    TeamcityBuld.prototype.findJob = function(jobs, project, name) {
        return jobs.filter(function(job) {
            return job.project === project && job.name === name;
        })[0];
    };
    TeamcityBuld.prototype.onLoadStatus = function(response) {
        var job = this.findJob(response.jobs, 'Allure Framework :: Allure Core', 'development_deploy'),
            status = job.color === 'blue' ? 'PASSED' : 'FAILED',
            countBlock = this.$el.find('.teamcity__count');
        countBlock.html(status);
        countBlock.removeClass('btn-default');
        countBlock.addClass(status === 'PASSED' ? 'btn-success' : 'btn-danger');
    };

    new TeamcityBuld('.teamcity');
});