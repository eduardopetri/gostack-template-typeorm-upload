import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getRepository(Transaction);

    const findTransactionById = await transactionRepository.findOne(id);

    if (!findTransactionById) {
      throw new AppError('Transaction not found.');
    }

    await transactionRepository.remove(findTransactionById);
  }
}

export default DeleteTransactionService;
