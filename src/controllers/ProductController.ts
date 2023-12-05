import { Request, Response } from "express";

import { ProductControllerInterface } from "./contracts/ProductControllerInterface";

import { ProductRepositoryInterface } from '../repositories/contracts/ProductRepositoryInterface';

export default class ProductController implements ProductControllerInterface {
    private productRepository: ProductRepositoryInterface;

    constructor(productRepository: ProductRepositoryInterface) {
        this.productRepository = productRepository;
    }

    async index(req: Request, res: Response) {
        try {
            const products = await this.productRepository.getProducts();
            res.json(products);
        } catch (error) {
            console.error("Erro ao obter produtos:", error);
            res.status(500).json({ error: "Erro interno ao obter produtos." });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const product = await this.productRepository.createProduct(req);
            res.status(201).json(product);
        } catch (error) {
            console.error("Erro ao criar produto:", error);
            res.status(500).json({ error: "Erro interno ao criar produto." });
        }
    }

    async show(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const product = await this.productRepository.findByKey(id);

            if (!product) {
                return res.status(404).json();
            }

            res.json(product);
        } catch (error) {
            console.error("Erro ao obter produto por ID:", error);
            res.status(500).json({ error: "Erro interno ao obter produto por ID." });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const product = await this.productRepository.update(req, id);

            if (!product) {
                return res.status(404).json();
            }

            res.json(product);
        } catch (error) {
            console.error("Erro ao atualizar produto:", error);
            res.status(500).json({ error: "Erro interno ao atualizar produto." });
        }
    }

    async destroy(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            await this.productRepository.delete(id);

            res.status(204).json();
        } catch (error) {
            console.error("Erro ao excluir produto:", error);
            res.status(500).json({ error: "Erro interno ao excluir produto." });
        }
    }
}
