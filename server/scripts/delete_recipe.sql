DO $do$

    DECLARE
        rec varchar := $1;
        act varchar := $2;
        res integer;
        use varchar;

    BEGIN
        SELECT count(*)
        from "Recipe"
        where "Recipe_Name" = rec INTO res;
--         raise notice 'result %', res;

        select "Author_Username" from "Recipe" where "Recipe_Name" = rec INTO use;
        IF use != act
        then raise notice 'You can only delete your own recipes';

        ELSIF res > 1 THEN
            RAISE NOTICE 'Recipe in use';

        ELSE
            DELETE FROM "Recipe" where "Recipe_Name" = rec;
            RAISE NOTICE 'recipe deleted';

        END IF;
    END $do$