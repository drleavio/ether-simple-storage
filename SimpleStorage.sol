//SPDX-License-Identifier:MIT

pragma solidity 0.8.7;

contract Storage {
    uint256 number;

    function set(uint256 num) public virtual {
        number = num;
    }

    function retrive() public view returns (uint256) {
        return number;
    }

    struct people {
        uint256 favnumber;
        string name;
    }
    people[] public People;
    mapping(string => uint256) public nameToFavnumber;

    function addperson(string memory _name, uint256 _favnumber) public {
        people memory newperson = people({favnumber: _favnumber, name: _name});
        People.push(newperson);
        nameToFavnumber[_name] = _favnumber;
    }
}
