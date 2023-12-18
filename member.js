function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'components/member/member.html',
    scope: {},
    controller: 'MemberController',
    controllerAs: 'member',
    bindToController: true
  };
}