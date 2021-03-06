import {
    Model,
    DataTypes,
    BelongsToManyAddAssociationMixin,
    BelongsToManyAddAssociationsMixin,
    BelongsToManyCountAssociationsMixin,
    BelongsToManyCreateAssociationMixin,
    BelongsToManyGetAssociationsMixin,
    BelongsToManyHasAssociationMixin,
    BelongsToManySetAssociationsMixin
} from 'sequelize';

import {sequelize} from '../utils';

import {ICart} from '../types';
import {Product} from './product';

class Cart extends Model implements ICart {
    public id: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public addProduct!: BelongsToManyAddAssociationMixin<Product, number>;
    public addProducts!: BelongsToManyAddAssociationsMixin<Product, number>;
    public countProducts!: BelongsToManyCountAssociationsMixin;
    public createProduct!: BelongsToManyCreateAssociationMixin<Product>;
    public getProducts!: BelongsToManyGetAssociationsMixin<Product>;
    public hasProduct!: BelongsToManyHasAssociationMixin<Product, number>;
    public setProducts!: BelongsToManySetAssociationsMixin<Product, number>;
}

Cart.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
}, {
    tableName: 'cart',
    sequelize
});

export {Cart};
