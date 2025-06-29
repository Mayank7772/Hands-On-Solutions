CREATE OR REPLACE PROCEDURE TransferFunds (
    from_account_id IN NUMBER,
    to_account_id IN NUMBER,
    amount IN NUMBER
) IS
    from_balance NUMBER;
BEGIN
    SELECT Balance INTO from_balance
    FROM Accounts
    WHERE AccountID = from_account_id
    FOR UPDATE;

    IF from_balance < amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in  account.');
    END IF;

    UPDATE Accounts
    SET Balance = Balance - amount,
        LastModified = SYSDATE
    WHERE AccountID = from_account_id;

    UPDATE Accounts
    SET Balance = Balance + amount,
        LastModified = SYSDATE
    WHERE AccountID = to_account_id;

    DBMS_OUTPUT.PUT_LINE('Transferred ' || amount || ' from account ' || from_account_id || ' to ' || to_account_id);
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        RAISE_APPLICATION_ERROR(-20002, 'accounts do not exist.');
END;
/

EXEC TransferFunds(1, 2, 100);
