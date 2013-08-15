/**
 * Создает экземпляр космического корабля.
 * @name Vessel
 * @param {String} name Название корабля.
 * @param {Number}[] position Местоположение корабля.
 * @param {Number} capacity Грузоподъемность корабля.
 */
function Vessel(name, position, capacity) {
    this.name = name;
    this.position = position;
    this.capacity = capacity;
    this.cargo = 0;
}

/**
 * Выводит текущее состояние корабля: имя, местоположение, доступную грузоподъемность.
 * @example
 * vessel.report(); // Грузовой корабль. Местоположение: Земля. Товаров нет.
 * @example
 * vesserl.report(); // Грузовой корабль. Местоположение: 50,20. Груз: 200т.
 * @name Vessel.report
 */
Vessel.prototype.report = function () {
    console.log(
        'Cargo Vessel: ', this.name, '. ',
        'Current position ', this.position, '. ',
        'Current cargo ', this.cargo, ' out of ', this.capacity, ' cargo hold'
    );
};

/**
 * Выводит количество свободного места на корабле.
 * @name Vessel.getFreeSpace
 */
Vessel.prototype.getFreeSpace = function () {
    console.log(
        'Available Cargo Capacity at ', this.capacity - this.cargo
    );
};

/**
 * Выводит количество занятого места на корабле.
 * @name Vessel.getOccupiedSpace
 */
Vessel.prototype.getOccupiedSpace = function () {
    console.log(
        'Taken Cargo Capacity at ', this.cargo
    );
};

/**
 * Возвращает количество свободного места на корабле.
 * @name Vessel.getFreeSpace
 */
Vessel.prototype.getCargoHold = function () {
    return this.capacity - this.cargo
};

/**
 * Возвращает количество занятого места на корабле.
 * @name Vessel.getOccupiedSpace
 */
Vessel.prototype.getCargo = function () {
    return this.cargo
};


/**
 * Переносит корабль в указанную точку.
 * @param {Number}[]|Planet newPosition Новое местоположение корабля.
 * @example
 * vessel.flyTo([1,1]);
 * @example
 * var earth = new Planet('Земля', [1,1]);
 * vessel.flyTo(earth);
 * @name Vessel.flyTo
 */
Vessel.prototype.flyTo = function (newPosition) {
    //NOTE не копируй ссылку newPosition!
    var 
        vessel = this;
    
    //TODO write alternative code that checks for constructor details.
    newPosition = (newPosition.reportPosition)?newPosition.reportPosition():newPosition;
    
    vessel.position[0] = newPosition[0];
    vessel.position[1] = newPosition[1];
};

/**
 * Заполняет корабль грузом, елси это возможно. Возвращает статус операции.
 * @param {Number} cargoAmount Количество погружаемого груза.
 * @name Vessel.loadCargo
 */
Vessel.prototype.loadCargo = function(cargoAmount){
    var 
        vessel = this,
        availableCargoHold = vessel.getCargoHold();
    
    if(cargoAmount <= availableCargoHold) {
        vessel.cargo += cargoAmount;
        return true;
    } else {
        console.log('Operation failed. Not enough cargo hold.');
        return false;
    }
};

/**
 * Выгружает груз с  корабля, елси это возможно. Возвращает статус операции.
 * @param {Number} cargoAmount Количество выгружаемого груза.
 * @name Vessel.loadCargo
 */
Vessel.prototype.unloadCargo = function(cargoAmount){
    //NOTE базовые типы передаются по значению;
    var 
        vessel = this;
    if(cargoAmount <= vessel.cargo) {
        vessel.cargo -= cargoAmount;
        return true;
    } else {
        console.log('Operation failed. Not enough cargo aboard.');
        return false;
    }
};

/**
 * Проверяет находится ли корабль в заданном местоположении. Возвращает статус проверки.
 * @param {Number}[] position Местоположение для сравнения с собственным
 * @name Vessel.atPosition
 */
Vessel.prototype.atPosition = function(position){
    var 
        vessel = this,
        vesselPosition = vessel.position;
    return (vesselPosition[0] == position[0] && vesselPosition[1] == position[1]);
};


/**
 * Создает экземпляр планеты.
 * @name Planet
 * @param {String} name Название Планеты.
 * @param {Number}[] position Местоположение планеты.
 * @param {Number} availableAmountOfCargo Доступное количество груза.
 */
function Planet(name, position, availableAmountOfCargo) {
    this.name = name;
    this.position = position;
    this.cargo = availableAmountOfCargo;
};

/**
 * Выводит текущее состояние планеты: имя, местоположение, количество доступного груза.
 * @name Planet.report
 */
Planet.prototype.report = function () {
    console.log(
        'Planet ', this.name, '. ',
        'Position ', this.position, '. ',
        'Current cargo ', this.cargo, '.'
    );
};

/**
 * Возвращает местоположение планеты.
 * @name Planet.reportPosition
 */
Planet.prototype.reportPosition = function () {
    return this.position;
};

/**
 * Возвращает доступное количество груза планеты.
 * @name Vessel.getAvailableAmountOfCargo
 */
Planet.prototype.getAvailableAmountOfCargo = function () {
    return this.cargo;
};

/**
 * Загружает на корабль заданное количество груза.
 * Перед загрузкой корабль должен приземлиться на планету.
 * @param {Vessel} vessel Загружаемый корабль.
 * @param {Number} cargoWeight Вес загружаемого груза.
 * @name Vessel.loadCargoTo
 */
Planet.prototype.loadCargoTo = function (vessel, cargoWeight) {
    var 
        planet = this;
    
    if( vessel.atPosition(this.position) &&
        vessel.getCargoHold() >= cargoWeight &&
        planet.cargo >= cargoWeight 
      ) {
        vessel.loadCargo(cargoWeight);
        planet.cargo -= cargoWeight;
    } else {
        console.log('Operation failed. Check vessel position, capacity, free space or planet supplies.');
    }
};

/**
 * Выгружает с корабля заданное количество груза.
 * Перед выгрузкой корабль должен приземлиться на планету.
 * @param {Vessel} vessel Разгружаемый корабль.
 * @param {Number} cargoWeight Вес выгружаемого груза.
 * @name Vessel.unloadCargoFrom
 */
Planet.prototype.unloadCargoFrom = function (vessel, cargoWeight) {
    var 
        planet = this;
    if( vessel.atPosition(this.position) &&
        vessel.getCargo() >= cargoWeight
      ) {
        vessel.unloadCargo(cargoWeight);
        planet.cargo += cargoWeight;
    } else {
        console.log('Operation failed. Check vessel position, capacity or availabel cargo.');
    }
};