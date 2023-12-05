import { Request } from "express";

import { ProductRepositoryInterface } from "./contracts/ProductRepositoryInterface";

import { Product } from "../models";

export default class ProductRepository implements ProductRepositoryInterface {
    async getProducts() {
        try {
            return await Product.findAll();
        } catch (error) {
            console.error("Erro ao obter produtos do banco de dados:", error);
            throw new Error("Erro interno ao obter produtos do banco de dados.");
        }
    }

    async createProduct(req: Request) {
        try {
            const {
                name,
                image,
                description,
                dailyPrice,
                weeklyPrice,
                biweeklyPrice,
                monthlyPrice,
            } = req.body;

            const product = await Product.create({
                name,
                image,
                description,
                dailyPrice,
                weeklyPrice,
                biweeklyPrice,
                monthlyPrice,
            });

            return product;
        } catch (error) {
            console.error("Erro ao criar produto no banco de dados:", error);
            throw new Error("Erro interno ao criar produto no banco de dados.");
        }
    }

    async findByKey(id: number) {
        try {
            return await Product.findByPk(id);
        } catch (error) {
            console.error("Erro ao obter produto por ID do banco de dados:", error);
            throw new Error("Erro interno ao obter produto por ID do banco de dados.");
        }
    }

    async update(req: Request, id: number) {
        try {
            const {
                name,
                image,
                description,
                dailyPrice,
                weeklyPrice,
                biweeklyPrice,
                monthlyPrice,
            } = req.body;

            const product = await Product.findByPk(id);

            if (product) {
                await product.update({
                    name,
                    image,
                    description,
                    dailyPrice,
                    weeklyPrice,
                    biweeklyPrice,
                    monthlyPrice,
                });
            }

            return product;
        } catch (error) {
            console.error("Erro ao atualizar produto no banco de dados:", error);
            throw new Error("Erro interno ao atualizar produto no banco de dados.");
        }
    }

    async delete(id: number) {
        try {
            const product = await Product.findByPk(id);

            if (product) {
                await product.destroy();
            }
        } catch (error) {
            console.error("Erro ao excluir produto do banco de dados:", error);
            throw new Error("Erro interno ao excluir produto do banco de dados.");
        }
    }
}
